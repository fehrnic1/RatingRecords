<script>
    let { form, data } = $props();
    let artists = data.artists;
    let labels = data.labels;
</script>

<div class="container">
    <div class="row">
        <div class="col">
            <h1>Add a record</h1>
        </div>
        <div class="col cornerButton">
            <a class="btn btn-danger" role="button" href="/records">Back</a>
        </div>
    </div>
</div>

<div class="container">
    <form method="POST" action="?/create">

        <div class="mb-3">
            <input
                value="/default_record.jpg"
                type="hidden"
                name="cover"
                class="form-control"
            />
        </div>

        <div class="row">
            <div class="col">
                <div class="mb-3">
                    <label for="artist" class="form-label">Artist</label>
                    <select name="artist" class="form-select" required>
                        <option selected disabled>Choose Artist</option>
                        {#each artists as artist}
                            <option value={artist.name}>{artist.name}</option>
                        {/each}
                    </select>
                </div>
            </div>

            <div class="col">
                <div class="mb-3">
                    <label for="label" class="form-label">Label</label>
                    <select name="label" class="form-select" required>
                        <option selected disabled>Choose Label</option>
                        {#each labels as label}
                            <option value={label.name}>{label.name}</option>
                        {/each}
                    </select>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">Title</label>
                    <input name="title" class="form-control" type="text" />
                </div>
            </div>

            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">Year</label>
                    <input name="year" class="form-control" type="number" />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">Runtime</label>
                    <input name="runtime" class="form-control" type="number" />
                </div>
            </div>

            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">Genre</label>
                    <input name="genre" class="form-control" type="text" />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">Last Listen</label>
                    <input name="lastlisten" class="form-control" type="date" />
                </div>
            </div>

            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">Highlights</label>
                    <input name="highlights" class="form-control" type="text" />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <label class="form-label" for="">Rating</label><br />
                <div class="star-rating">
                    <input type="radio" id="star5" name="rating" value="5" />
                    <label for="star5" class="bi bi-star-fill"></label>

                    <input type="radio" id="star4" name="rating" value="4" />
                    <label for="star4" class="bi bi-star-fill"></label>

                    <input type="radio" id="star3" name="rating" value="3" />
                    <label for="star3" class="bi bi-star-fill"></label>

                    <input type="radio" id="star2" name="rating" value="2" />
                    <label for="star2" class="bi bi-star-fill"></label>

                    <input type="radio" id="star1" name="rating" value="1" />
                    <label for="star1" class="bi bi-star-fill"></label>
                </div>
            </div>

            <div class="col">
                <div class="row mt-4">
                    <div class="col-md-4">
                        <button type="submit" class="btn btn-primary">
                            Add Record
                        </button>
                    </div>
                    <div class="col-md-8 mt-2 text-start">
                        {#if form?.success}
                            <p>Record created!</p>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
