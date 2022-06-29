import React from 'react';
import { useState } from 'react';
import '../css/form.css';
import Footer from './Footer';

function Form() {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    function handleEmail(e){
        setData({
            ...data,
            email: e.target.value
        })
    } 
    function handlePass(e){
        setData({
            ...data,
            password: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault();

        console.log(data);

    }


    return (
        <div className="wrap">
            <div className="login-body">
                <div className="login-form">
                    <div className="login-form-main">
                        <h1>Đăng Nhập</h1>
                        <form method="post" className="login" onSubmit={handleSubmit}>
                            <div className="email">
                                <div className="login-input-email">
                                    <label className="input__id">
                                        <input
                                            type="text"
                                            className="text error"
                                            placeholder=" "
                                            onChange={handleEmail}
                                            value={data.email}
                                        />
                                        <label className="place" htmlFor="id__userlogin">Email hoặc số diện thoại</label>
                                    </label>
                                </div>
                            </div>
                            <div className="password">
                                <div className="login-input-pass">
                                    <label className="input__id" placeholder>
                                        <input
                                            type="text"
                                            className="text error"
                                            placeholder=" "
                                            onChange={handlePass}
                                            value={data.password}
                                        />
                                        <label className="place-pass " htmlFor="id__userlogin">Mật Khẩu</label>
                                    </label>
                                </div>

                            </div>
                            <button onSubmit={handleSubmit} className="btn-login">
                                Đăng Nhập
                            </button>
                            <div className="form-help">
                                <div className="login-remember-me">
                                    <input type="checkbox" />
                                    <label htmlFor="remember-true">
                                        <span className="login-remember-text"> Ghi nhớ tôi</span>
                                    </label>
                                </div>
                                <a href="#" className="help-link">Bạn cần trợ giúp?</a>
                            </div>
                        </form>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Form