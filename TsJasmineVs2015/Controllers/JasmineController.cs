using System;
using System.Web.Mvc;

namespace TsJasmineVs2015.Controllers
{
    [RoutePrefix("")]
    public class JasmineController : Controller
    {
        [Route("")]
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
