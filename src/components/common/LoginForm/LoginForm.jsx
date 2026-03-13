import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';

function LoginForm() {

    return (
        <div className='flex items-center justify-center'>
            <div className='w-full max-w-3xl grid grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-xl'>
               <LeftSide/>
               <RightSide/>
            </div>
        </div>
    );
}

export default LoginForm;
