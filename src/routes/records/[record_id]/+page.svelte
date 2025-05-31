<script>
    let { data, form } = $props();
    let record = data.record;
</script>

<!-- ///////////////////////////  CONTAINER BODY  ///////////////////////////////////// -->
<div class="container detailCard">
    <div class="row">
        <div class="col">
            <div>
                <img src={record.cover} alt="" height="300" />
            </div>
        </div>

        <div class="col">
            <h1>{record.title}</h1>
            <div>Artist: {record.artist}</div>
            <div>Label: {record.label}</div>
            <div>Runtime: {record.runtime} minutes</div>
            <div>Year: {record.year}</div>
            <div>Genre: {record.genre}</div>
            <br />

            <form method="POST" action="?/delete">
                <input type="hidden" name="id" value={record._id} />
                <button type="submit" class="btn btn-danger">Delete Record</button>
            </form>

        </div>
        <div class="col cornerButton">
            <a class="btn btn-danger" role="button" href="/records">Back</a>
        </div>
    </div>
</div>

<!-- ///////////////////////////  DATA UPDATE  ///////////////////////////////////// -->

<form method="POST" action="?/update">
    <!-- non-updateable Data -->
    <input name="id" type="hidden" value={record._id} />
    <input name="cover" type="hidden" value={record.cover} />
    <input name="title" type="hidden" value={record.title} />
    <input name="artist" type="hidden" value={record.artist} />
    <input name="label" type="hidden" value={record.label} />
    <input name="runtime" type="hidden" value={record.runtime} />
    <input name="year" type="hidden" value={record.year} />
    <input name="genre" type="hidden" value={record.genre} />

    <!-- updateable Data -->
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="mb-3">
                    <label class="form-label" for="">Last Listen:</label>
                    <input
                        value={record.lastlisten}
                        name="lastlisten"
                        class="form-control"
                        type="date"
                    />
                </div>
            </div>

            <div class="col">
                <label class="form-label" for="">Rating</label><br />
                <div class="star-rating">
                    <input
                        type="radio"
                        id="star5"
                        name="rating"
                        value="5"
                        checked={record.rating == 5}
                    />
                    <label for="star5" class="bi bi-star-fill"></label>
                    <input
                        type="radio"
                        id="star4"
                        name="rating"
                        value="4"
                        checked={record.rating == 4}
                    />
                    <label for="star4" class="bi bi-star-fill"></label>
                    <input
                        type="radio"
                        id="star3"
                        name="rating"
                        value="3"
                        checked={record.rating == 3}
                    />
                    <label for="star3" class="bi bi-star-fill"></label>
                    <input
                        type="radio"
                        id="star2"
                        name="rating"
                        value="2"
                        checked={record.rating == 2}
                    />
                    <label for="star2" class="bi bi-star-fill"></label>
                    <input
                        type="radio"
                        id="star1"
                        name="rating"
                        value="1"
                        checked={record.rating == 1}
                    />
                    <label for="star1" class="bi bi-star-fill"></label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="mb-3">
                    <label class="form-label" for="">Highlights</label>
                    <input
                        value={record.highlights}
                        name="highlights"
                        class="form-control"
                        type="text"
                    />
                </div>
            </div>

            <div class="col">
                <div class="row mt-3">
                    <div class="col-md-3">
                        <button class="btn btn-primary mt-3">Update</button>
                    </div>
                    <div class="col-md-9 mt-4 text-start">
                        {#if form?.success}
                            <p>{record.title} has been updated!</p>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>

<!-- OLD RATING -->
<!--  <div class="mb-3">
                    <label class="form-lable" for="">Rating</label>
                    <input
                        value={record.rating}
                        name="rating"
                        class="form-control"
                        type="number"
                    />
                </div> -->
