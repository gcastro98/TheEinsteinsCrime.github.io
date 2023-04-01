
export function selectPath(){
    let host = window.location.href;
    if(host.includes('localhost')){
        return './models';
    } else {
        return './TheEinsteinsCrime/models';
    }
}