import "../styles/register.css";

export default function RegisterPage(){


    return(
        <div id="register-container">
        <h2>Register</h2>
        <form id="register-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="gender">Gender:</label>
            <select id="gender" name="gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>

            <label for="aadhar">Aadhar:</label>
            <input type="text" id="aadhar" name="aadhar" pattern="[0-9]{12}" required title="Aadhar should be a 12-digit number" />

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required title="Phone number should be a 10-digit number" />

            <label for="balance">Balance:</label>
            <input type="number" id="balance" name="balance" required />

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <label for="role">Role:</label>
            <select id="role" name="role" required>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
            </select>

            <button type="button" onClick={() => register()}>Register</button>
        </form>
    </div>

    );
}