actor {
    public func greet(name : Text) : async Text {
        return "Hello, " # name # "!";
    };

    var counter: Nat = 0;

    // Read the counter value with a get function.
    public query func getCount() : async Nat {
        counter
    };

    // Write an arbitrary value with a set function.
    public func setCount(count: Nat) : async () {
        counter := count;
    };
};
