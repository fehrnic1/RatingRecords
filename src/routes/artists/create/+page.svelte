<script>
    let { form } = $props();
</script>

<a class="btn btn-danger" role="button" href="/artists">Back</a>
<h1>Add a record</h1>
<form method="POST" action="?/create">
    <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input name="name" class="form-control" type="text" />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Origin City</label>
        <input name="originCity" class="form-control" type="text" />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Origin Country</label>
        <input name="originCountry" class="form-control" type="text" />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Formed in</label>
        <input name="formedIn" class="form-control" type="number" />
    </div>

    <div class="mb-3">
        <label for="" class="form-label">Band Camp Link</label>
        <input name="bandCampLink" class="form-control" type="string" />
    </div>

    <div class="mb-3">
        <input name="logo" class="form-control" type="hidden" value="defualt_aritst.jpg" />
    </div>

    <button type="submit" class="btn btn-primary"> Add Artist </button>
</form>

{#if form?.success}
    <p>Artist created</p>
{/if}
