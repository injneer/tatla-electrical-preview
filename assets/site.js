(function () {
  var b = document.querySelector(".burger"),
    n = document.getElementById("nav");
  if (b && n)
    b.addEventListener("click", function () {
      var o = n.classList.toggle("open");
      b.setAttribute("aria-expanded", o ? "true" : "false");
      b.setAttribute("aria-label", o ? "Close menu" : "Open menu");
    });
  var f = document.getElementById("quote");
  if (f)
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(f),
        note = f.querySelector(".form-note");
      if (!d.get("name") || !d.get("phone") || !d.get("details")) {
        note.textContent = "Please fill in your name, phone and project details.";
        note.className = "form-note err";
        return;
      }
      var body =
        "Name: " +
        d.get("name") +
        "\nPhone: " +
        d.get("phone") +
        "\nEmail: " +
        (d.get("email") || "") +
        "\nService: " +
        d.get("service") +
        "\nLocation: " +
        (d.get("location") || "") +
        "\n\n" +
        d.get("details");
      window.location.href =
        "mailto:raj@tatlaelectrical.com?subject=" +
        encodeURIComponent("Quote request - " + d.get("service")) +
        "&body=" +
        encodeURIComponent(body);
      note.textContent =
        "Your email app should open with your request. If it does not, call 604-907-8000.";
      note.className = "form-note";
    });
})();
