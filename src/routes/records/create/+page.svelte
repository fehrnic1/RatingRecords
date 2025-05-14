<script>
    let { form } = $props();
</script>

<a class="btn btn-danger" role="button" href="/records">Back</a>
<h1>Add a record</h1>
<form method="POST" action="?/create">

    <div class="mb-3">
        <label for="" class="form-label">Title</label>
        <input name="title" class="form-control" type="text" />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Artist</label>
        <input name="artist" class="form-control" type="text" />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Label</label>
        <input name="label" class="form-control" type="text" />
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
        <input name="genre" class="form-control" type="text"/>
    </div>


    <button type="submit" class="btn btn-primary"> 
       Add Record
    </button>
</form>

{#if form?.success}
    <p>Record created</p>
{/if}