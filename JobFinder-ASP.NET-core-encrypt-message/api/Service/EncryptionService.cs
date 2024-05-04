using System.Security.Cryptography;
using System.IO;
using System.Text;
public class EncryptionService
{
    private readonly byte[] key;
    private readonly byte[] iv;

    public EncryptionService()
    {
        // For simplicity, using hardcoded key and IV. In production, securely store and manage keys!
        key = Convert.FromBase64String("GmjmVSjB4lpZYmqN3jnMb/5KKyMjcMi/eD5VL1shY34=");
        iv = Convert.FromBase64String("gZF8UL2eCe0R9ohHJl/sOw==");
    }

    public string Encrypt(string plainText)
    {
        using (Aes aesAlg = Aes.Create())
        {
            aesAlg.Key = key;
            aesAlg.IV = iv;

            ICryptoTransform encryptor = aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV);

            using (MemoryStream msEncrypt = new MemoryStream())
            {
                using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
                {
                    using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))
                    {
                        swEncrypt.Write(plainText);
                    }
                }
                return Convert.ToBase64String(msEncrypt.ToArray());
            }
        }
    }

 public string Decrypt(string cipherText)
{
    try
    {
        using (Aes aesAlg = Aes.Create())
        {
            aesAlg.Key = key;
            aesAlg.IV = iv;
            ICryptoTransform decryptor = aesAlg.CreateDecryptor(aesAlg.Key, aesAlg.IV);
            using (MemoryStream msDecrypt = new MemoryStream(Convert.FromBase64String(cipherText)))
            {
                using (CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
                {
                    using (StreamReader srDecrypt = new StreamReader(csDecrypt))
                    {
                        return srDecrypt.ReadToEnd();
                    }
                }
            }
        }
    }
    catch (CryptographicException ex)
    {
        // Handle the cryptographic exception here
        // You can log the error or perform any other necessary actions
        Console.WriteLine("Error decrypting message: " + ex.Message);
        return null; // Or throw a custom exception or return a default value
    }
    catch (FormatException ex)
    {
        // Handle the Base64 format exception here
        // You can log the error or perform any other necessary actions
        Console.WriteLine("Error decrypting message: " + ex.Message);
        return null; // Or throw a custom exception or return a default value
    }
}


}
