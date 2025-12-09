import { Toaster } from 'react-hot-toast';

const GlobalToaster = () => {
    return (
        <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
                success: {
                    style: {
                        // padding: '10px 10px',
                        color: '#000',
                        background: "#ffffff"
                    },
                },
                // error: {
                //   style: {
                //     background: 'red',
                //     color: 'white',
                //   },
                // },
            }}
        />
    );
};

export default GlobalToaster;
