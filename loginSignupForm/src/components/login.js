import Register from './register';

const login = () => {

    const toggleForm = () => {
        let signIn = document.querySelector('.card-signin');
        let signUp = document.querySelector('.card-signup');
        // check which element have hidden class
        if (signUp.classList.contains("hidden")) {
            signIn.classList.add("hidden");
            signUp.classList.remove("hidden");
        } else {
            signUp.classList.add("hidden");
            signIn.classList.remove("hidden");
        }
    }
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin">
                        <div class="card-body">
                            <h5 class="card-title text-center">Login</h5>
                            <form class="form-signin">
                                <div class="form-label-group">
                                    <label for="inputEmail">Email address</label>
                                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                                </div>

                                <div class="form-label-group">
                                    <label for="inputPassword">Password</label>
                                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                                </div>

                                <div class="custom-control custom-checkbox mb-3">
                                    <label class="custom-control-label" for="customCheck1">Remember password</label>
                                    <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                </div>
                                <button class="btn btn-lg btn-success btn-block text-uppercase" type="submit">Login</button>
                                <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={toggleForm} type="button">Register</button>
                            </form>
                        </div>
                    </div>
                    <Register toggleForm={toggleForm} />
                </div>
            </div>
        </div>
    )
}

export default login;