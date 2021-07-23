<script>
    let id = [0, 1, 2];
    export let gm;
    export let block;
    export let turn;
    const buttonClass = (row, col, block) => {
        let hoverClass = "";
        console.log("gm turn", turn);
        if (turn === 1 && block === 0) {
            hoverClass = "hover:bg-red-500";
        } else if (turn === 0 && block === 0) {
            hoverClass = "hover:bg-blue-500";
        }

        let blockClass = "";
        if (block === 2) {
            blockClass = "bg-red-500";
        } else if (block === 1) {
            blockClass = "bg-blue-500";
        }

        return "w-20 h-20 border " + hoverClass + " " + blockClass;
    };
</script>

{#key turn}
    <div class="text-center">
        {#each id as row_id}
            {#each id as col_id}
                <button
                    class={buttonClass(row_id, col_id, block[row_id][col_id])}
                    on:click={() => {
                        gm.clicked(row_id, col_id);
                    }}>{block[row_id][col_id]}</button
                >
            {/each}
            <br />
        {/each}
        <br />
        <button
            class="border-2 border-black hover:bg-black hover:text-white"
            on:click={gm.start}>ゲームスタート</button
        >
    </div>
{/key}
