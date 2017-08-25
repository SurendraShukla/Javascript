function RedisDataManager() {
    this.connect = function() {
        console.log('Connect to database');
    };

    this.scan = function() {
        return 'Data from database';
    };
}


function DataManager() {
    this.getData = function() {
        return 'Legacy data';
    }
}


function Adapter() {
    var redis = new RedisDataManager();
    redis.connect();

    this.getData = function() {
        return redis.scan();
    }
}

function Client(dataManager) {
    console.log(dataManager.getData());
}

var client1 = new Client(new DataManager());
client1.getData();

/*
 RedisDataManager does not have getData method
 So instead of creating object of RedisDataManager
 we use adapter which will convert our use to get data from RedisDataManager
*/
var client = new Client(new Adapter());
client.getData();

