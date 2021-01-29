const register = (props) => {

    return (
        <div class="card card-signup hidden">
            <div class="card-body">
                <h5 class="card-title text-center">Sign Up</h5>
                <form class="form-signup">
                    <div class="form-label-group">
                        <label for="inputName">Full Name</label>
                        <input type="email" name="fullname" id="inputName" class="form-control" placeholder="Full Name" required autofocus />
                    </div>
                    <div class="form-label-group">
                        <label for="inputEmail">Email address</label>
                        <input type="email" name="email" id="inputEmail" class="form-control" placeholder="Email address" required />
                    </div>
                    <div class="form-label-group">
                        <label for="inputPassword">Password</label>
                        <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required />
                    </div>
                    <div class="form-label-group">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmpassword" id="confirmPassword" class="form-control" placeholder="Confirm Password" required />
                    </div>
                    <button class="btn btn-lg btn-success btn-block text-uppercase" type="submit">Sign Up</button>
                    <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={props.toggleForm} type="button">Login</button>
                </form>
            </div>
        </div>
    )
}

export default register;