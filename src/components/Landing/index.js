import React from "react";
import Navigation from '../Navigation';

const Landing = () => (
    <section class="hero is-link is-large is-fullheight-with-navbar">
        <div class="hero-head">
            <Navigation />
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
                <p class="Landing">Title</p>
                <p class="Landing">Subtitle</p>
            </div>
        </div>
        <div class="hero-foot">
            <nav class="is-fixed is-boxed is-fullwidth">
                <div class="container">
                </div>
            </nav>
        </div>
    </section>

);

export default Landing;
