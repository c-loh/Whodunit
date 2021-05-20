public class SheetData {

    // data in the form: {optionName, trait1, trait2, trait3}
    // since the data doesn't change, we just define it here as a constant

    public static final String[][] SUSPECTS = {
        {"Sir Henry Swynford", "neat", "dark", "mean"},
        {"Dr. Lucifer Miles", "neat", "tall", "mean"},
        {"Nurse Blanche", "neat", "tall", "thin"},
        {"Maid Abigail", "neat", "thin", "mean"},
        {"Roxanne Holgrave", "neat", "thin", "dark"},
        {"Nathaniel Kent", "neat", "dark", "tall"},
        {"Henrietta Maudelyn", "tall", "dark", "thin"},
        {"Colonel Salisbury", "tall", "dark", "mean"},
        {"Butler Curruthers", "thin", "dark", "mean"},
        {"Lady Swynford", "thin", "mean", "tall"}
    };

    public static final String[][] WEAPONS = {
        {"Figurine", "small", "sharp", "heavy"},
        {"Knife", "small", "sharp", "metal"},
        {"Broken Glass", "small", "sharp", "shiny"},
        {"Book End", "small", "heavy", "metal"},
        {"Paper Weight", "small", "heavy", "shiny"},
        {"Gun", "small", "metal", "shiny"},
        {"Axe", "sharp", "heavy", "metal"},
        {"Vase", "sharp", "heavy", "shiny"},
        {"Poker", "sharp", "shiny", "metal"},
        {"Brass Pipe", "heavy", "metal", "shiny"}
    };

    public static final String[][] SCENES = {
        {"Basement", "indoors", "damp", "cold"},
        {"Closet", "indoors", "damp", "dim"},
        {"Garage", "indoors", "damp", "dusty"},
        {"Pantry", "indoors", "cold", "dim"},
        {"Attic", "indoors", "cold", "dusty"},
        {"Gatehouse", "indoors", "dim", "dusty"},
        {"Stable", "damp", "cold", "dim"},
        {"Greenhouse", "damp", "cold", "dusty"},
        {"Wine Cellar", "damp", "dim", "dusty"},
        {"Porch", "cold", "dim", "dusty"}
    };

    public static final String[][] MOTIVES = {
        {"Revenge", "bold", "senseless", "heated"},
        {"Insantiy", "bold", "senseless", "unplanned"},
        {"Jealousy", "heated", "senseless", "vicious"},
        {"Love", "bold", "heated", "unplanned"},
        {"Position", "bold", "heated", "vicious"},
        {"Money", "bold", "unplanned", "vicious"},
        {"Fear", "senseless", "heated", "unplanned"},
        {"Power", "senseless", "bold", "vicious"},
        {"Anger", "senseless", "unplanned", "vicious"},
        {"Hatred", "heated", "unplanned", "vicious"}
    };
}