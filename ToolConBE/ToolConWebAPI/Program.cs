using Microsoft.EntityFrameworkCore;
using ToolConWebAPI;
using System.Globalization;


var builder = WebApplication.CreateBuilder(args);

CultureInfo.DefaultThreadCurrentCulture = CultureInfo.CurrentCulture;
CultureInfo.DefaultThreadCurrentUICulture = CultureInfo.CurrentCulture;
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// Configure DbContext with SQL Server
builder.Services.AddDbContext<ToolConDbContext>(options =>
	options.UseSqlServer(builder.Configuration.GetConnectionString("ToolConDbContext")));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add CORS policy
builder.Services.AddCors(options =>
{
	options.AddPolicy(name: "AllowSpecificOrigin",
					  policy =>
					  {
						  policy.WithOrigins("http://localhost:3000")
								.AllowAnyHeader()
								.AllowAnyMethod();
					  });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Apply CORS policy
app.UseCors("AllowSpecificOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();
