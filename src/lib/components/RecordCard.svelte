<script>
    import { enhance } from "$app/forms";
    let { record } = $props();
</script>

<div class="entity-card">
    <div><img class="img-fluid" src={record.cover} alt="" /></div>
    <div class="details">
        <div class="title">
            <a class="custom-link" href={"/records/" + record._id}>{record.title}</a>
        </div>
        <div>by {record.artist}</div>

        <div class="details">
        <!-- ADD TO STACK -->
        {#if !record.stack}
            <form method="POST" action="?/addToStack" use:enhance>
                <input name="recordId" type="hidden" value={record._id}>
                <button class="btn btn-success">Stack</button>
            </form>
        {/if}
        <!-- REMOVE FROM STACK -->
        {#if record.stack}
            <form method="POST" action="?/removeFromStack" use:enhance>
                <input name="recordId" type="hidden" value={record._id}>
                <button class="btn btn-danger">Stack</button>
            </form>
        {/if}
        </div>



    </div>
</div>
