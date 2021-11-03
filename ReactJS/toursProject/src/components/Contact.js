export default function Contact(){
    return (
        <div class="contact" id="contact">
            <div class="violet-overlay">
                <div class="container">
                    <h2 class="text-center">Get in touch</h2>
                    <div class="contact-form">
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Phone" />
                            <textarea placeholder="Message"></textarea>
                            <input type="submit" value="SEND" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};