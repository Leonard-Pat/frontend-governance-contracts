import styles from "./votetab.module.scss";
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const VoteTab = ({}) => {
    const rows = [
        { id: 1, ProposalID: 5912, Vote: 'FOR', VotingPower: 100, tx: '0x124958910241'},
        { id: 2, ProposalID: 5912, Vote: 'Against', VotingPower: 100, tx: '0x124958910241'},
        { id: 3, ProposalID: 5912, Vote: 'Against', VotingPower: 100, tx: '0x124958910241'},
        { id: 4, ProposalID: 5912, Vote: 'Against', VotingPower: 100, tx: '0x124958910241'},
        { id: 5, ProposalID: 5912, Vote: 'Against', VotingPower: 100, tx: '0x124958910241'},
        { id: 6, ProposalID: 5912, Vote: 'Against', VotingPower: 100, tx: '0x124958910241'},
        { id: 7, ProposalID: 5912, Vote: 'Against', VotingPower: 100, tx: '0x124958910241'},
        { id: 8, ProposalID: 5912, Vote: 'Against', VotingPower: 100, tx: '0x124958910241'},
        { id: 9, ProposalID: 5912, Vote: 'Against', VotingPower: 100, tx: '0x124958910241'},
        { id: 10, ProposalID: 5912, Vote: 'Against', VotingPower: 100, tx: '0x124958910241'},
        { id: 11, ProposalID: 5912, Vote: 'Against', VotingPower: 100, tx: '0x124958910241'},
      ];
      const columns = [
        { field: 'ProposalID', headerName: 'Proposal ID', width: 150},
        { field: 'Vote', headerName: 'Vote', width: 150},
        { field: 'VotingPower', headerName: 'Voting Power', width: 150},
        { field: 'tx', headerName: 'Tx Hash', width: 415},
      ];

  return (
    <>
    <div className={styles.vote}>

    </div>
    <div className={styles.grid}>
    <ThemeProvider theme={darkTheme}>

    <DataGrid
            rows={rows}
            columns={columns}
            disableColumnSelector
    />
    </ThemeProvider>
    
    </div>
    </>
  );
};

export default VoteTab;
