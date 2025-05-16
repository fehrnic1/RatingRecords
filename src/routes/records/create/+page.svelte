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
        <input name="year" class="form-control" type="number" />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Genre</label>
        <input name="genre" class="form-control" type="text" />
    </div>

    
    <div class="mb-3">
        <label for="" class="form-label">Last Listen</label>
        <input name="lastlisten" class="form-control" type="date" />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Rating</label>
        <input name="rating" class="form-control" type="text" />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Highlights</label>
        <input name="highlights" class="form-control" type="text" />
    </div>



    <button type="submit" class="btn btn-primary"> Add Record </button>
</form>

{#if form?.success}
    <p>Record created</p>
{/if}
