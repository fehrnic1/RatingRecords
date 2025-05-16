<script>
    let { data, form } = $props();
    let record = data.record;
</script>

<!-- ///////////////////////////  CONTAINER TOP  ///////////////////////////////////// -->
<div class="container mb-3">
    <a class="btn btn-danger" role="button" href="/records">Back</a>
</div>

<!-- ///////////////////////////  CONTAINER MID  ///////////////////////////////////// -->
<div class="container mb-3">
    <div class="row">
        <div>
            <!-- <h1>{data.record.title}</h1> -->
        </div>
    </div>

    <div class="row">
        <div class="col md-4">
            <div>
                <img src="/default_record.jpg" alt="" height="300" />
            </div>
        </div>

        <div class="col md-4">
            <h1>{record.title}</h1>
            <div>Artist: {record.artist}</div>
            <div>Label: {record.label}</div>
            <div>Runtime: {record.runtime} minutes</div>
            <div>Year: {record.year}</div>
            <div>Genre: {record.genre}</div>
        </div>
        <div class="col md-4"></div>
    </div>
</div>

<!-- ///////////////////////////  CONTAINER BTM  ///////////////////////////////////// -->

   
     
            <!-- Details-Update -->
            <form method="POST" action="?/update">
                <!-- non-updateable Data -->
                <input name="id" type="hidden" value={record._id} />
                <input name="title" type="hidden" value={record.title} />
                <input
                    name="artist"
                    type="hidden"
                    value={record._artist}
                />
                <input name="label" type="hidden" value={record.label} />
                <input
                    name="runtime"
                    type="hidden"
                    value={record.runtime}
                />
                <input name="year" type="hidden" value={record.year} />
                <input name="genre" type="hidden" value={record.genre} />

                <!-- updateable Data -->
                <div class="container mb-3">
                    <div class="mb-3">
                        <label class="form-lable" for="">Last Listen:</label>
                        <input
                            value={record.lastlisten}
                            name="lastlisten"
                            class="form-control"
                            type="date"
                        />
                    </div>

                    <div class="mb-3">
                        <label class="form-lable" for="">Rating</label>
                        <input
                            value={record.rating}
                            name="rating"
                            class="form-control"
                            type="number"
                        />
                    </div>

                    <div class="mb-3">
                        <label class="form-lable" for="">Highlights</label>
                        <input
                            value={record.highlights}
                            name="highlights"
                            class="form-control"
                            type="text"
                        />
                    </div>

                    <button class="btn btn-primary mt-3">Update</button>

                    {#if form?.success}
                        Record {record.title} updated
                    {/if}
                </div>
            </form>
        


