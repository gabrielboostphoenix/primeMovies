// Importing Area
import Style from './SignUp.module.css';
import { HiMiniEye, HiMiniEyeSlash } from 'react-icons/hi2';
import { useState } from 'react';

// That's the sign up page component
const SignUp = () => {

    /*
        Using a react hook to declare the necessary variables
    */
    const [activatedButton, setActiveButton] = useState(true);
    const [inputType, setInputType] = useState('password');

    return (

        <main className={Style.container}>

            <form className={Style.formContainer}>

                <div className={Style.nameContainer}>
                    <label htmlFor='userName' className={Style.userNameLabel}>Nome:</label>
                    <input type='text' id='userName' className={Style.userNameField} placeholder='Digite o nome de usuário' />
                </div>

                <div className={Style.emailContainer}>
                    <label htmlFor="userEmail" className={Style.userEmailLabel}>E-mail:</label>
                    <input type='email' id='userEmail' className={Style.userEmailField} placeholder='Coloque um endereço de e-mail' />
                </div>

                <div className={Style.passwordContainer}>

                    <label htmlFor='userPassword' className={Style.userPasswordLabel}>Senha:</label>
                    <div className={Style.passwordAndButtonContainer}>

                        <input type={inputType} id='userPassword' className={Style.userPasswordField} placeholder='Crie uma senha para conta' />

                        { activatedButton ? <HiMiniEye className={Style.showPasswordButton} onClick={(event) => {

                            // Setting the default behaviour of this event
                            event.preventDefault();
                            // Setting to active other icon and disable this one
                            // In this case will appear the password credential
                            setActiveButton(false);
                            setInputType('text');

                            }}/> : <HiMiniEyeSlash className={Style.showPasswordButton} onClick={(event) => {

                            // Setting the default behaviour of this event
                            event.preventDefault();
                            // Setting to disable this icon and active other one
                            // In this case won't appear the password credential
                            setActiveButton(true);
                            setInputType('password');

                            }}/>

                        }

                    </div>

                </div>

                <button type='submit' className={Style.accountCreatingButton}>Criar Conta</button>

            </form>

        </main>

    );
}

// Exporting Area
export { SignUp };