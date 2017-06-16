using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MarcoBit.Controllers.API
{
    [Route("api/[controller]")]
    public class PoloniexController : Controller
    {

        // GET: api/values
        [HttpGet]
        public string Get()
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://poloniex.com/public?command=returnTicker");
                //client.BaseAddress = new Uri("https://poloniex.com/public?command=returnTradeHistory&currencyPair=BTC_NXT&start=1410158341&end=1410499372");

                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var response = client.GetAsync("").Result;
                if (response.IsSuccessStatusCode)
                {

                    //var definition = new { BTC_BNC = "",  };

                    //var aaa = JsonConvert.DeserializeAnonymousType(response.Content.ReadAsStringAsync().Result, definition);
                    //var eee = JsonConvert.DeserializeObject(response.Content.ReadAsStringAsync().Result);
                    //var ttt = JsonConvert.DeserializeObject<toto>(response.Content.ReadAsStringAsync().Result);

                 
                    //var ddd = JsonConvert.DeserializeObject(ttt);



                    return response.Content.ReadAsStringAsync().Result;
                }
            }



            return "";
        }

        [HttpGet]
        [Route("GetChartData")]
        public string GetChartData()
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://poloniex.com/public?command=returnChartData&currencyPair=BTC_XMR&start=1405699200&end=9999999999&period=14400");

                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var response = client.GetAsync("").Result;
                if (response.IsSuccessStatusCode)
                {
                    return response.Content.ReadAsStringAsync().Result;
                }
            }



            return "";
        }

        

       
    }
}
