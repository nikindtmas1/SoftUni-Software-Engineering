import { html } from '../../node_modules/lit-html/lit-html.js';
import { getCarsById } from '../api/data.js';
import { deleteCar } from '../api/data.js';

const detailsTemplate = (item, isOwner, onDelete) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${item.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${item.brand}</li>
            <li><span>Model:</span>${item.model}</li>
            <li><span>Year:</span>${item.year}</li>
            <li><span>Price:</span>${item.price}$</li>
        </ul>

        <p class="description-para">${item.description}</p>

        ${isOwner ? html`
        <div class="listings-buttons">
            <a href=${`/edit/${item._id}`} class="button-list">Edit</a>
            <a @click=${onDelete} href="#" class="button-list">Delete</a>
        </div>
        ` : ''}
      
    </div>
</section>
`;

export async function detailsPage(ctx) {

    const id = ctx.params.id;

    const item = await getCarsById(id);

    console.log(item._ownerId);

    const userId = sessionStorage.getItem('userId');

    console.log(userId);

    ctx.render(detailsTemplate(item, item._ownerId == userId, onDelete));

    async function onDelete() {

        await deleteCar(item._id);
        ctx.page.redirect('/catalog');//????
    }
}