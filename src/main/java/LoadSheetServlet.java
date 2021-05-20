import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

/**
 * A servlet that takes input from a html <form> and talks to MySQL moviedbexample,
 * generates output as a html <table>
 */

// Declaring a WebServlet called LoadDataServlet, which maps to url "/load-sheet"
@WebServlet(name = "LoadSheetServlet", urlPatterns = "/load-sheet")
public class LoadSheetServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        response.setContentType("application/json");    // Response mime type

        // Output stream to STDOUT
        PrintWriter out = response.getWriter();

        // get data from SheetData, parse into JSON, send to frontend
        JsonArray data = new JsonArray();

        JsonArray suspects = new JsonArray();
        for (int i = 0; i < SheetData.SUSPECTS.length; i++) {
            String[] suspect = SheetData.SUSPECTS[i];
            JsonArray entry = new JsonArray();
            entry.add(suspect[0]);
            entry.add(suspect[1]);
            entry.add(suspect[2]);
            entry.add(suspect[3]);
            suspects.add(entry);
        }
        data.add(suspects);

        JsonArray weapons = new JsonArray();
        for (int i = 0; i < SheetData.WEAPONS.length; i++) {
            String[] weapon = SheetData.WEAPONS[i];
            JsonArray entry = new JsonArray();
            entry.add(weapon[0]);
            entry.add(weapon[1]);
            entry.add(weapon[2]);
            entry.add(weapon[3]);
            weapons.add(entry);
        }
        data.add(weapons);

        JsonArray scenes = new JsonArray();
        for (int i = 0; i < SheetData.SCENES.length; i++) {
            String[] scene = SheetData.SCENES[i];
            JsonArray entry = new JsonArray();
            entry.add(scene[0]);
            entry.add(scene[1]);
            entry.add(scene[2]);
            entry.add(scene[3]);
            scenes.add(entry);
        }
        data.add(scenes);

        JsonArray motives = new JsonArray();
        for (int i = 0; i < SheetData.MOTIVES.length; i++) {
            String[] motive = SheetData.MOTIVES[i];
            JsonArray entry = new JsonArray();
            entry.add(motive[0]);
            entry.add(motive[1]);
            entry.add(motive[2]);
            entry.add(motive[3]);
            motives.add(entry);
        }
        data.add(motives);

        out.write(data.toString());

        out.close();
    }
}
