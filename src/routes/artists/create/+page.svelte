<script>
    let { form } = $props();
</script>

<div class="container">
    <div class="row">

        <div class="col">
            <h1>Add an Artist</h1>
        </div>

        <div class="col cornerButton">
            <a class="btn btn-danger" role="button" href="/artists">Back</a>
        </div>

    </div>
</div>

<div class="container">
    <form method="POST" action="?/create">
        <div class="mb-3">
            <input
                value="/default_artist.jpg"
                type="hidden"
                name="logo"
                class="form-control"
            />
        </div>

        <div class="row">

            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">Name</label>
                    <input name="name" class="form-control" type="text" />
                </div>
            </div>

            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">Formed in</label>
                    <input name="formedIn" class="form-control" type="number" />
                </div>
            </div>

        </div>

        <div class="row">

            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">Origin City</label>
                    <input name="originCity" class="form-control" type="text" />
                </div>
            </div>

            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">Origin Country</label>
                    <input
                        name="originCountry"
                        class="form-control"
                        type="text"
                    />
                </div>
            </div>

        </div>

        <div class="row">

            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">Band Camp Link</label>
                    <input
                        name="bandCampLink"
                        class="form-control"
                        type="string"
                    />
                </div>
            </div>

            <div class="col mt-4">
                <div class="row mt-2">

                    <div class="col-md-4">
                        <button type="submit" class="btn btn-primary">
                            Add Artist
                        </button>
                    </div>

                    <div class="col-md-8 mt-2 text-start">
                        {#if form?.success}
                            <p>Artist Has Been Created</p>
                        {/if}
                    </div>

                </div>
            </div>

        </div>
    </form>
</div>
