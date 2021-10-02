import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        color: '#05F2DB',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    pro: {
        color: '#05F2DB',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        // height: '7px',
        height: '17px',
        borderRadius: '15px',
    },
}));

const LinearPro = () => {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
            const diff = Math.random() * 25;
            return Math.min(oldProgress + diff, 70);
            });
        }, 500);

    return () => {
        clearInterval(timer);
    };
    }, []);

    return (
        <div className={classes.root}>
            <LinearProgress className={classes.pro} variant="buffer" value={progress} />
        </div>
    );
}
export default LinearPro