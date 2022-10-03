import styles from "./votetab.module.scss";
import { DataGrid } from '@mui/x-data-grid';
import Select from 'react-select'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useState} from 'react';
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import { BigNumber } from 'ethers';
import TextField from '@mui/material/TextField';
import voteproxyabi from '../../contracts/VoteProxyERC20Votes.json';

const voteProxyABI = voteproxyabi.abi

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const options = [
  { value: '1', label: 'For' },
  { value: '0', label: 'Against' },
  { value: '2', label: 'Abstain' },
]

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#83ddbc' : '#F7F8DA',
    backgroundColor: state.isFocused ? "rgba(131,221,188, 0.3)" : null,
    
  }),
     menuList: (provided, state) => ({
    ...provided,
    backgroundColor: 'rgb(20,17,20)',
    border: '1px solid #F7F8DA',
    borderTop: 'none',
   
  }),
}

const rows = [
  { id: 1, ProposalID: 17524, Vote: 'For', VotingPower: 192, tx: '0x781973252451'},
  { id: 2, ProposalID: 22341, Vote: 'Abstain', VotingPower: 80, tx: '0x928356138467'},
  { id: 3, ProposalID: 43651, Vote: 'Against', VotingPower: 64, tx: '0x859137512352'},
  { id: 4, ProposalID: 93363, Vote: 'For', VotingPower: 16, tx: '0x679176583565'},
  { id: 5, ProposalID: 41665, Vote: 'Against', VotingPower: 73, tx: '0x236262356'},
  { id: 6, ProposalID: 13862, Vote: 'For', VotingPower: 184, tx: '0x6256147346235'},
  { id: 7, ProposalID: 70326, Vote: 'For', VotingPower: 268, tx: '0x4262346423563'},
  { id: 8, ProposalID: 23177, Vote: 'For', VotingPower: 512, tx: '0x98262361464642'},
  { id: 9, ProposalID: 59272, Vote: 'Against', VotingPower: 32, tx: '0x928356138467'},
  { id: 10, ProposalID: 21346, Vote: 'Against', VotingPower: 531, tx: '0x523985320923'},
  { id: 11, ProposalID: 981714, Vote: 'Against', VotingPower: 35, tx: '0x2359875238973'},
];
const columns = [
  { field: 'ProposalID', headerName: 'Proposal ID', width: 150},
  { field: 'Vote', headerName: 'Vote', width: 150},
  { field: 'VotingPower', headerName: 'Voting Power', width: 150},
  { field: 'tx', headerName: 'Tx Hash', width: 415},
];

const VoteTab = ({proxyAddress}) => {

  const [selectedVote, setSelectedVote] = useState();
  const [proposalID, setProposalID] = useState('0')

  const { config } = usePrepareContractWrite({
    addressOrName: proxyAddress,
    contractInterface: voteProxyABI,
    functionName: 'proxyVote',
    args: [selectedVote, BigNumber.from(proposalID)],
    chainId: 5,
  })
  
  const {writeAsync } = useContractWrite(config)

  const handleCastVote = async () => {
    await writeAsync?.()
  }

  const handleProposalId = (id) => {
    setProposalID(id)
  }


  return (
    <>
      <h1 className={styles.title}>Vote On Proposal</h1>
      <div className={styles.vote}>
        <p className={styles.text}>
          This tab allows you to vote your DAOs proposal, first enter the
          proposal ID you wish to vote on and then select from the dropdown menu
          the vote you wish to cast. <span>Please note</span> that if your DAO
          is using Governor Alphas' implementation you may not select the
          'Abstain' option.
        </p>
        <div className={styles.voteOption}>
          <p>Vote Option:</p>
          <div style={{ width: "300px" }}>
            <Select
              onChange={(e) => {
                setSelectedVote(e.value);
              }}
              styles={customStyles}
              options={options}
            />
          </div>
        </div>
        <div  className={styles.inputProposal}>
          <ThemeProvider theme={darkTheme}>
            <TextField
              placeholder="Enter Proposal ID"
              id="outlined-basic"
              label="Proposal ID"
              variant="outlined"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              sx={{ input: { color: "#F7F8DA", width:'280px' } }}
              onChange={(e) => handleProposalId(e.target.value)}
            />
          </ThemeProvider>
        </div>
        <button className={styles.castVote} onClick={handleCastVote}>
          castVote
        </button>
      </div>
      <div className={styles.grid}>
        <ThemeProvider theme={darkTheme}>
          <DataGrid rows={rows} columns={columns} disableColumnSelector />
        </ThemeProvider>
      </div>
    </>
  );
};

export default VoteTab;
