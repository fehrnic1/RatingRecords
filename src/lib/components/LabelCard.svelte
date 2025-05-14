<script>
    let { record } = $props();
</script>

<div class="record-card">
    <div><img class="img-fluid" src={record.label.logo} alt="" /></div>
    <div class="details">
        <div class="title">{record.label.name}</div>
        <div>Location: {record.label.location} ({record.label.country})</div>
    </div>
</div>

<style>
    .record-card {
        border: 1px solid #555;
        height: 100%;
        background-color: #444;
        color: white;
    }
    .details {
        padding: 0.5em;
    }
    .title {
        font-weight: bold;
    }
</style>
