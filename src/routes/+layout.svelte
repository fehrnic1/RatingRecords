<script>
    import "./styles.css";
    let { children } = $props();
</script>

<nav
    class="navbar navbar-expand-md bg-body-tertiary bg-dark"
    data-bs-theme="dark"
>
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img
                src="/navbarvinyl.png"
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt=""
            />
            RatingRecords
        </a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a
                        class="nav-link active"
                        aria-current="page"
                        href="/records">Records</a
                    >
                </li>

                <li class="nav-item">
                    <a
                        class="nav-link active"
                        aria-current="page"
                        href="/artists">Artists</a
                    >
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link active"
                        aria-current="page"
                        href="/labels">Labels</a
                    >
                </li>
            </ul>
        </div>
    </div>
</nav>

<div>
    {@render children()}
</div>
