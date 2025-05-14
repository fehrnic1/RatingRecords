<script>
    let { data, form } = $props();
</script>

<div class="mb-3">
<a class="btn btn-danger" role="button" href="/records">Back</a>
</div>

<div>
<img src="/EveryBridgeBurning.jpg" alt="" height="400" />
</div>

<form method="POST" action="?/update">
    
    <input name="id" type="hidden" value={data.record._id}>
    
    <div class="mb-3">
        <label class="form-lable" for="">Title</label>
        <input value={data.record.title} name="title" class="form-control" type="text" />
    </div>
    <div class="mb-3">
        <label class="form-lable" for="">Artist</label>
        <input value={data.record.artist} name="artist" class="form-control" type="text" />
    </div>
    <div class="mb-3">
        <label class="form-lable" for="">Label</label>
        <input value={data.record.label} name="label" class="form-control" type="text" />
    </div>
    <div class="mb-3">
        <label class="form-lable" for="">Runtime</label>
        <input value={data.record.runtime} name="runtime" class="form-control" type="text" />
    </div>
    <div class="mb-3">
        <label class="form-lable" for="">Year</label>
        <input value={data.record.year} name="year" class="form-control" type="text" />
    </div>
    <div class="mb-3">
        <label class="form-lable" for="">Genre</label>
        <input value={data.record.genre} name="genre" class="form-control" type="text" />
    </div>
   
    <button class="btn btn-primary">Update</button>
    
</form>


{#if form?.success}
Record {data.record.title} updated
{/if}




<!-- <div>Artist: {data.artist}</div>
<div>Label: {data.label}</div>
<div>Runtime: {data.runtime} minutes</div>
<div>Year: {data.year}</div>
<div>Genre: {data.genre}</div> -->
