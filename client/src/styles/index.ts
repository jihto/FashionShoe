import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  banner: {
    backgroundColor: 'whitesmoke',
    width: '100%',
    height: '400px',
    position: 'relative',
  },
  bannerImage: {
    backgroundColor: 'whitesmoke',
    width: '100%',
    height: '400px',
    position: 'absolute',
    borderRadius: '8px',
    textTransform: 'none', // Prevents the button text from being uppercase
  },
  bannerBtn: {
    position: 'absolute',
    top: '50%',
  },
  btnPrev: {
    position: 'absolute',
    top: '50%',
    background: 'white',
    borderRadius: '30px',
    zIndex: 20,
    boxShadow:
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  btnNext: {
    position: 'absolute',
    top: '50%',
    background: 'white',
    borderRadius: '30px',
    boxShadow:
      '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    zIndex: 20,
    right: 0,
  },
  box: {
    margin: '50px 0',
    boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    borderRadius: '15px',
    background: 'whitesmoke',
    padding: '0 30px 30px 0',
  },
  scrollContainer: {
    position: 'relative',
    display: 'flex',
    gap: 1,
    overflow: 'auto',
    padding: '1px',
    bgcolor: 'whitesmoke',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      height: '8px',
      backgroundColor: '#f5f5f5',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '4px',
      backgroundColor: '#888',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#555',
    },
  },
}));
export default useStyles;
