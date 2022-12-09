import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#ffffff',
            marginLeft: 10,
        }
    },
    main: {
        minHeight: '80vh',
    },
    footer: {
        textAlign: 'center',
    },
    section: {
        marginTop: 10,
        marginBottom: 10,
    }
});
export default useStyles;