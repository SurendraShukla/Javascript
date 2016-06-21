
def sendMessage(from: String, to: String, text: String): String = '@' + to + ':' + text + '-' + from;

val hiMessage = sendMessage(_:String,_:String,"Hi to all");
val hiMessageToDAP = hiMessage(_:String,"DAP Team");
val hiMessageToDAPFromSurendra = hiMessageToDAP("Surendra");