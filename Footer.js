import React, { Component } from 'react'
import './App.css'

export default class Footer extends Component {
  render() {
    return (
        <footer>

        <section class="footer__container">
            <section class="footer__links">
                <section class="footer__link--wrapper">

                    <section class="footer__link--items">
                        <h2>Contact </h2>
                        <a href="#">Contact</a> <a href="#">Support</a>

                    </section>
                </section>
                <section class="footer__link--wrapper">

                    <section class="footer__link--items">
                        <h2>Social Media</h2>
                        <a href="#">Instagram</a> <a href="#">Facebook</a>
                        <a href="#">Youtube</a> <a href="#">Twitter</a>
                    </section>
                </section>
            </section>
            <section class="social__media">
                <section class="social__media--wrap">
                    <section class="footer__logo">
                        <a href="#" id="footer__logo"> INTERNET SPACE PLACE</a>
                    </section>
                    <p class="website__rights">� INTERNET SPACE PLACE.</p>
                    <section class="social__icons">
                        <a href="#" class="social__icon--link" target="_blank">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="#" class="social__icon--link">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="social__icon--link">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="#" class="social__icon--link">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="social__icon--link">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </section>
                </section>
            </section>
        </section>
    </footer>
    )
  }
}
