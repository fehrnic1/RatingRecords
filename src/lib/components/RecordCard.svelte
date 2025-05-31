<script>
    import { enhance } from "$app/forms";
    let { record } = $props();
</script>

<div class="entity-card">
    <div>
        <a class="custom-link" href={"/records/" + record._id}>
            <img class="img-fluid" src={record.cover} alt="" />
        </a>
    </div>
    <div class="details">
        <div class="row">
            <div class="col-6 mt-1">
                <div class="title">
                    <a class="custom-link" href={"/records/" + record._id}
                        >{record.title}</a
                    >
                </div>
                <div>{record.artist}</div>
            </div>

            <div class="col-6">
                <div class="details">
                    {#if !record.stack}
                        <form 
                        method="POST"
                        action="?/addToStack"
                        use:enhance
                        >
                            <input
                                name="recordId"
                                type="hidden"
                                value={record._id}
                            />
                            <button class="btn btn-success">Add To Stack</button
                            >
                        </form>
                    {/if}

                    {#if record.stack}
                        <form
                            method="POST"
                            action="?/removeFromStack"
                            use:enhance
                        >
                            <input
                                name="recordId"
                                type="hidden"
                                value={record._id}
                            />
                            <button class="btn btn-danger"
                                >Remove From Stack</button
                            >
                        </form>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>
