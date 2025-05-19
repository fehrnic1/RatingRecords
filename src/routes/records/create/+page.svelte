<script>
    let { form, data } = $props();
    let artists = data.artists;
    let labels = data.labels;
</script>

<a class="btn btn-danger" role="button" href="/records">Back</a>
<h1>Add a record</h1>
<form method="POST" action="?/create">

    <div class="mb-3">
        <input value="/default_record.jpg" type="hidden" name="cover" class="form-control"/>
    </div>
   
    <div class="mb-3">
        <label for="" class="form-label">Title</label>
        <input name="title" class="form-control" type="text" />
    </div>

    <div class="mb-3">
        <label for="artist" class="form-label">Artist</label>
        <select name="artist" class="form-select" required>
            <option selected disabled>Choose Artist</option>
            {#each artists as artist}
                <option value={artist.name}>{artist.name}</option>
            {/each}
        </select>
    </div>

    <div class="mb-3">
        <label for="label" class="form-label">Label</label>
        <select name="label" class="form-select" required>
            <option selected disabled>Choose Label</option>
            {#each labels as label}
                <option value={label.name}>{label.name}</option>
            {/each}
        </select>
    </div>


    <div class="mb-3">
        <label for="" class="form-label">Runtime</label>
        <input name="runtime" class="form-control" type="number" />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Year</label>
        <input name="year" class="form-control" type="number"/>
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Genre</label>
        <input name="genre" class="form-control" type="text"/>
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Last Listen</label>
        <input name="lastlisten" class="form-control" type="date"/>
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Rating</label>
        <input name="rating" class="form-control" type="text" />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Highlights</label>
        <input name="highlights" class="form-control" type="text" />
    </div>




<!-- ///////////////////  STAR RATING  ///////////////////////////////////////////////////// -->

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
<div class="col-md-6">

    <div class="rating-card p-4">
        <h5 class="mb-4">Rating</h5>
        <div class="star-rating animated-stars">
            <input type="radio" id="star5" name="rating" value="5">
            <label for="star5" class="bi bi-star-fill"></label>
            <input type="radio" id="star4" name="rating" value="4">
            <label for="star4" class="bi bi-star-fill"></label>
            <input type="radio" id="star3" name="rating" value="3">
            <label for="star3" class="bi bi-star-fill"></label>
            <input type="radio" id="star2" name="rating" value="2">
            <label for="star2" class="bi bi-star-fill"></label>
            <input type="radio" id="star1" name="rating" value="1">
            <label for="star1" class="bi bi-star-fill"></label>
        </div>
    </div>

</div>

<style>
    .star-rating {
        direction: rtl;
        display: inline-block;
        cursor: pointer;
    }

    .star-rating input {
        display: none;
    }

    .star-rating label {
        color: #ddd;
        font-size: 24px;
        padding: 0 2px;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .star-rating label:hover,
    .star-rating label:hover~label,
    .star-rating input:checked~label {
        color: #ffc107;
    }
</style>

<script>
    document.querySelectorAll('.star-rating:not(.readonly) label').forEach(star => {
        star.addEventListener('click', function() {
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
</script>
    
<!-- //////////////////////////////////////////////////////////////////////////////////////////// -->

    <button type="submit" class="btn btn-primary"> Add Record </button>
</form>

{#if form?.success}
    <p>Record created</p>
{/if}
