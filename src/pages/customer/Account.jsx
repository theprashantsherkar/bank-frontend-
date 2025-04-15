import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import Navbar from '../../components/Navbar'
import { UserContext } from '../../context/UserContext'
import Button from '../../components/Button'
import AmountPopup from '../../components/popups/Withdraw'

function Account() {
    const { user } = useContext(UserContext);
    const [popupOpen, setPopupOpen] = useState(false);
    const [balance, setBalance] = useState(10000);
    const [type, setType] = useState("Withdraw");

    const handleAmountSubmit = (amount) => {
        if (amount > balance) {
            toast.error('Insufficient Funds');
        } else {
            setBalance(balance - amount);
            toast.success(`Transaction of ₹${amount} processed!`);
        }
        setPopupOpen(false);
    };

    return (
        <div>
            <Navbar className={`static`} />
            <div className='h-screen  flex flex-col items-center justify-start  bg-gray-200 w-full p-8 gap-10'>
                <div className='flex items-center gap-5 bg-white shadow-2xl shadow-gray-300 rounded-2xl w-full h-[200px] border border-gray-400 '>
                    <div className='flex flex-col items-start justify-center gap-5 w-1/2 h-full border-r border-gray-400 px-10'>
                        <h1 className='text-xl'>Name: {user.username}</h1>
                        <h1 className='text-xl'>Email: {user.email}</h1>
                        <h1 className='text-xl'>Account ID: {user.id}</h1>
                    </div>
                    <div className='flex flex-col items-center justify-start p-10 gap-5 w-1/2 h-full '>
                        <h1 className='font-bold text-2xl'>Account Balance:</h1>
                        <h1 className='text-2xl'>₹ 10,000</h1>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-5  '>
                    <Button handlerFunc={() => {
                        setPopupOpen(true)
                        setType("Withdraw")
                    }} label={"Withdraw"} >Withdraw</Button>
                    <Button label={"Deposit"} handlerFunc={() => {
                        setPopupOpen(true)
                        setType("Deposit")
                    }
                    }>Deposit</Button>
                </div>
                <AmountPopup
                    open={popupOpen}
                    onClose={() => setPopupOpen(false)}
                    onSubmit={handleAmountSubmit}
                    balance={balance}
                    popupType={type}
                />

            </div>
        </div>
    )
}

export default Account