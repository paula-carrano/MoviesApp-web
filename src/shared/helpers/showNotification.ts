import { toast, ToastOptions, ToastPosition, TypeOptions } from 'react-toastify';

const showNotification = (
    message: string,
    type: TypeOptions,
    position: ToastPosition = 'top-center',
    durationInSeconds = 5
) => {
    const options: ToastOptions = {
        position: position,
        autoClose: durationInSeconds * 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
    };

    switch (type) {
        case 'info':
            toast.info(message, options);
            return;
        case 'success':
            toast.success(message, options);
            return;
        case 'warning':
            toast.warning(message, options);
            return;
        case 'error':
            toast.error(message, options);
            return;
        case 'dark':
            toast.dark(message, options);
            return;
        default:
            toast(message, options);
            return;
    }
};

export { showNotification };