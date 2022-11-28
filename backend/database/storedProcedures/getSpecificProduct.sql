create or alter procedure getIndividualProduct(@Productname varchar(60)) 
	as 
begin
	select * from products where Productname like @Productname
end 
go
