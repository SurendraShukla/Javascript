function oos() {
    console.log('OOS is called.');
}

function dap() {
    oos();
    console.log('DAP is called.');
}

function cobalt() {
    dap();
    console.log('Cobalt is called.');
}

cobalt();
