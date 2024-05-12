// Importing Area
import Style from './SignIn.module.css';

// That's the sign in page component
const SignIn = () => {
    return (
        <main className={Style.container}>
            <form className={Style.formContainer}>
                <label htmlFor='userEmail' className={Style.userEmailLabel}>E-mail:</label>
                <input type='email' id='userEmail' className={Style.userEmailField} placeholder='Coloque o seu endereço de e-mail'/>
                <label htmlFor='userPassword' className={Style.userPasswordLabel}>Senha:</label>
                <input type='password' id='userPassword' className={Style.userPasswordField} placeholder='Crie uma senha para a sua conta'/>
                <input type='button' value="Enviar" className={Style.sendButton}/>
            </form>
        </main>
    );
}

// Exporting Area
export { SignIn };