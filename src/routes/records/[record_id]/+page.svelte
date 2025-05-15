<script>
    let { data, form } = $props();
</script>

<div class="mb-3">
    <a class="btn btn-danger" role="button" href="/records">Back</a>
</div>

<div class="container">
    <div class="row">
        <div>
            <h1>{data.record.title}</h1>
        </div>
    </div>

    <div class="row">
        <div class="col md-4">
            <div>
                <img src="/default_record.jpg" alt="" height="400" />
            </div>
        </div>
        <div class="col md-8">
            <div>Artist: {data.record.artist}</div>
            <div>Label: {data.record.label}</div>
            <div>Runtime: {data.record.runtime} minutes</div>
            <div>Year: {data.record.year}</div>
            <div>Genre: {data.record.genre}</div>
        </div>
    </div>
</div>

<!-- Details-Update -->
<form method="POST" action="?/update">
    <!-- non-updateable Data -->
    <input name="id" type="hidden" value={data.record._id} />
    <input name="title" type="hidden" value={data.record.title} />
    <input name="artist" type="hidden" value={data.record._artist} />
    <input name="label" type="hidden" value={data.record.label} />
    <input name="runtime" type="hidden" value={data.record.runtime} />
    <input name="year" type="hidden" value={data.record.year} />
    <input name="genre" type="hidden" value={data.record.genre} />

    <!-- updateable Data -->
    <div class="mb-3">
        <label class="form-lable" for="">Last Listen:</label>
        <input
            value={data.record.lastlisten}
            name="lastlisten"
            class="form-control"
            type="datetime"
        />
    </div>

    <div class="mb-3">
        <label class="form-lable" for="">Rating</label>
        <input
            value={data.record.rating}
            name="rating"
            class="form-control"
            type="number"
        />
    </div>

    <div class="mb-3">
        <label class="form-lable" for="">Highlights</label>
        <input
            value={data.record.highlights}
            name="highlights"
            class="form-control"
            type="text"
        />
    </div>

    <button class="btn btn-primary">Update</button>
</form>

{#if form?.success}
    Record {data.record.title} updated
{/if}
