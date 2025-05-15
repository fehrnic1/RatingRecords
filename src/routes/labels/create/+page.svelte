<script>
    let { form } = $props();
</script>

<a class="btn btn-danger" role="button" href="/labels">Back</a>
<h1>Add a label</h1>
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

    <button type="submit" class="btn btn-primary"> Add Label </button>
</form>

{#if form?.success}
    <p>Label created</p>
{/if}