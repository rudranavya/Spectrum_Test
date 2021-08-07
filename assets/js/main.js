
/* Tabs Section */

const [tabs, tabsPanels] = [
	Array.from(document.querySelectorAll(".tabs li")),
	Array.from(document.querySelectorAll(".tabs-panel"))
];

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(`#${tab.dataset.target}`);
		removeActiveClass([tabs, tabsPanels]);
		tab.classList.add("active");
		target.classList.add("active");
	});
});

const removeActiveClass = (el) => {
	el.forEach((item) => {
		item.find((e) => e.classList.contains("active")).classList.remove("active");
	});
};


/* Color Picker */


$("#bgcolor").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('clickout').style.backgroundColor = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('clickout').style.backgroundColor = color.toHexString(); // #ff0000
	}
  });

  $("#yourname").spectrum({
	color: "#777",
	change: function (color) {
	  document.getElementById('name').style.color = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('name').style.color = color.toHexString(); // #ff0000
	}
  });

  $("#conbtnclr").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('contactme').style.backgroundColor = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('contactme').style.backgroundColor = color.toHexString(); // #ff0000
	}
  });

  $("#menutxtclr").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('list1').style.color = color.toHexString();
	  document.getElementById('list2').style.color = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('list1').style.color = color.toHexString();
	  document.getElementById('list2').style.color = color.toHexString(); // #ff0000
	}
  });


  $("#designations").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('uidev').style.color = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('uidev').style.color = color.toHexString(); // #ff0000
	}
  });
  

  $("#contbtntxtclr").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('contactme').style.color = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('contactme').style.color = color.toHexString(); // #ff0000
	}
  });

  $("#getintouchbtnclr").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('btn').style.backgroundColor = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('btn').style.backgroundColor = color.toHexString(); // #ff0000
	}
  });

  $("#getintouchtxtclr").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('btn').style.color = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('btn').style.color = color.toHexString(); // #ff0000
	}
  });

  $("#webbtnclr").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('btn2').style.backgroundColor = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('btn2').style.backgroundColor = color.toHexString(); // #ff0000
	}
  });

  $("#webtxtclr").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('btn2').style.color = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('btn2').style.color = color.toHexString(); // #ff0000
	}
  });


  $("#sidebarcolor").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('sidebar').style.backgroundColor = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('sidebar').style.backgroundColor = color.toHexString(); // #ff0000
	}
  });

  $("#phone").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('phnum').style.color = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('phnum').style.color = color.toHexString(); // #ff0000
	}
  });


  $("#probgclr").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('probg').style.backgroundColor = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('probg').style.backgroundColor = color.toHexString(); // #ff0000
	}
  });

  $("#prohead").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('proheading').style.color = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('proheading').style.color = color.toHexString(); // #ff0000
	}
  });

  $("#senditbtn").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('sendbtn').style.backgroundColor = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('sendbtn').style.backgroundColor = color.toHexString(); // #ff0000
	}
  });

  $("#senditclr").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('sendbtn').style.color = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('sendbtn').style.color = color.toHexString(); // #ff0000
	}
  });

  $("#hyperlink").spectrum({
	color: "#f00",
	change: function (color) {
	  document.getElementById('hyper').style.color = color.toHexString(); // #ff0000
	}, move: function (color) {
	  document.getElementById('hyper').style.color = color.toHexString(); // #ff0000
	}
  });
