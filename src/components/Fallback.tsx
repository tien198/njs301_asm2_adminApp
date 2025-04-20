type props = { message?: string }

function Fallback({ message }: props) {
    return (
        <div>
            {message || 'Loading...'}
        </div>
    );
}

export default Fallback;