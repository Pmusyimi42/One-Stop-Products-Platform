import React, { useContext, useState } from "react"
import { UserContext } from "./UserContext"
import cartoon from "../images/signup.png"

function Errors({errs}) {
    return (
        <div className="text-red-500 text-[10px]">
    {
        errs.map((err, index) => <div key={index}>- {err}</div>)        
    }
    </div>
    )
}

function SignUpForm() {
    const { handleSignup } = useContext(UserContext)
    const [sellerAccount, setSellerAccount] = useState(false)
    const [errors, setErrors] = useState({})

    function handleErrors(e) {
        e.preventDefault()
        handleSignup(setErrors,e)
    }
    return(
        <div className="signup-form border">
            <div className="mx-auto flex justify-center items-center">
                <div className="hidden md:block max-w-lg">
                    <img className="w-full" src={cartoon} alt="Sitting" />
                </div>
                 <form onSubmit={handleErrors} className={`${sellerAccount ? "bg-gradient-to-tr from-white via-cyan-400/50 to-sky-100 " : "bg-gradient-to-tr to-white via-cyan-500/50 from-white"} flex shadow-md shadow-black/50 flex-col p-3 my-8 pb-2 max-w-lg`}>
                        <div className="font-bold mb-2 flex">
                            <input type="checkbox" checked={sellerAccount} onChange={() => {
                                setSellerAccount(!sellerAccount)
                            }} className="" name="selleraccount" />
                            <label className="ml-4">Seller Account</label>
                        </div>
                        { sellerAccount? <div className="flex flex-col">
                            </div> : null }
                        <div className="grid grid-cols-2 gap-4 my-1">
                            <div className="flex flex-col">
                                <label className="text-sm font-bold py-1"><span className="text-red-500 font-bold mr-2">*</span>Name:</label>
                                <input type="text" className="shadow-md py-1 px-3" name="name"/>
                                {errors.name ? <Errors errs={errors.name} /> : null}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 my-1">
                            <div className="flex flex-col">
                                <label className="text-sm font-bold py-1"><span className="text-red-500 font-bold mr-2">*</span>Email:</label>
                                <input type="text" className="shadow-md py-1 px-3" name="email"/>
                                {errors.email ? <Errors errs={errors.email} /> : null}
                            </div>
                        </div>
                                      

                        <label className="text-sm font-bold py-1"><span className="text-red-500 font-bold mr-2">*</span>Password:</label>
                        <input type="password" className="shadow-md py-1 px-3" name="password"/>
                        {errors.password ? <Errors errs={errors.password} /> : null}

                        <label className="text-sm font-bold py-1"><span className="text-red-500 font-bold mr-2">*</span>Confirm Password:</label>
                        <input type="password" className="shadow-md py-1 px-3" name="password_confirmation"/>
                        {errors.password_confirmation ? <Errors errs={errors.password_confirmation} /> : null}

                        
                        <button className="bg-sky-700 w-max px-4 py-2 rounded-md my-2 mx-auto hover:bg-sky-500 hover:text-white">SignUp</button>
                        <a href="/login" className="text-blue-900 text-md text-center">login</a>
            </form>
            <div></div>
          </div>
        </div>
        
    )
}

export default SignUpForm;
