// Importing Area
import Style from './SignUp.module.css';
import { useState, useEffect } from 'react';

// That's the sign up page component
const SignUp = () => {
    return (
        <main className={Style.container}>
            <form className={Style.formContainer}>
                <label htmlFor='userName' className={Style.userNameLabel}>Nome:</label>
                <input type='text' id='userName' className={Style.userNameField} placeholder='Digite o seu nome de usuário' />
                <label htmlFor="userEmail" className={Style.userEmailLabel}>E-mail:</label>
                <input type='email' id='userEmail' className={Style.userEmailField} placeholder='Coloque o seu endereço de e-mail' />
                <label htmlFor='userPassword' className={Style.userPasswordLabel}>Senha:</label>
                <input type='password' id='userPassword' className={Style.userPasswordField} placeholder='Crie uma senha para a sua conta' />
                <button type='submit' className={Style.accountCreatingButton}>Criar Conta</button>
            </form>
        </main>
    );
}

// Exporting Area
export { SignUp };