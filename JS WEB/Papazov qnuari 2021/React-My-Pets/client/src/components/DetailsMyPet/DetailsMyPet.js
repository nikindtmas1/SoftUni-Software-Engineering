

const DetailsMyPet = () => {

    return(

        <section class="detailsMyPet">
                <h3>Koko</h3>
                <p>Pet counter: <i class="fas fa-heart"></i> 6</p>
                <p class="img"><img src="https://www.freepngimg.com/thumb/parrot/2-parrot-png-images-download-thumb.png"></p>
                <form action="#" method="POST">
                    <textarea type="text" name="description">This is my parrot Koko</textarea>
                    <button class="button"> Save</button>
                </form>
            </section>
    )
}

export default DetailsMyPet;